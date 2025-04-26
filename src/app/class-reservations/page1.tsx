"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid } from "@/components/ui/grid";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

const daysOfWeek = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const timeSlots = ["08:00", "09:30", "11:00", "16:00", "17:30", "19:00"];

interface Class {
  name: string;
}

const initialSchedule: { [key: string]: { [key: string]: Class | null } } = {};

daysOfWeek.forEach((day) => {
  initialSchedule[day] = {};
  timeSlots.forEach((time) => {
    initialSchedule[day][time] = null;
  });
});

const classes = [
    { name: "Yoga" },
    { name: "Speening" },
    { name: "Entrenamiendo Funciona" },
    { name: "Pilates" },
    { name: "Zumba" },
    { name: "Boxeo" },
];

function getRandomClass(day: string, time: string) {
    const dayTimeSeed = day + time;
    const index = Math.abs(dayTimeSeed.charCodeAt(0) + dayTimeSeed.charCodeAt(1) + dayTimeSeed.charCodeAt(2)) % classes.length;
    return classes[index];
}

export default function ClassReservationsScreen() {
  const router = useRouter();
  const [schedule, setSchedule] = useState(initialSchedule);
  const [reservations, setReservations] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        // Prevent caching of the page
        window.addEventListener('beforeunload', () => {
            // Reload the page from the server
            window.location.reload();
        });

        return () => {
            window.removeEventListener('beforeunload', () => {
                // Reload the page from the server
                window.location.reload();
            });
        };
    }, []);

  const reserveClass = (day: string, time: string) => {
    setReservations({ ...reservations, [`${day}-${time}`]: true });
  };

  const cancelReservation = (day: string, time: string) => {
    const newReservations = { ...reservations };
    delete newReservations[`${day}-${time}`];
    setReservations(newReservations);
  };

    const isClassReserved = (day: string, time: string) => {
        return reservations[`${day}-${time}`] || false;
    };

  return (
    <div className="grid h-screen place-items-center">
      <Card className="w-[90%] max-w-4xl">
        <CardHeader>
          <CardTitle>Turnos de clases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th></th>
                  {daysOfWeek.map((day) => (
                    <th key={day} className="text-left p-2">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time) => (
                  <tr key={time}>
                    <th className="text-left p-2">{time}</th>
                    {daysOfWeek.map((day) => {
                      const classDetails = schedule[day][time] || getRandomClass(day, time);
                      const isReserved = isClassReserved(day, time);

                      return (
                        <td key={`${day}-${time}`} className="p-2">
                          {classDetails ? (
                            <div>
                              <Label className="block">{classDetails.name}</Label>
                              {isReserved ? (
                                <Button variant="destructive" onClick={() => cancelReservation(day, time)}>
                                  Cancelar reserva
                                </Button>
                              ) : (
                                <Button onClick={() => reserveClass(day, time)}>Reservar</Button>
                              )}
                            </div>
                          ) : (
                            <div>
                              <Label className="block text-muted-foreground">Available</Label>
                              <Button onClick={() => reserveClass(day, time)}>Reserve</Button>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button variant="secondary" onClick={() => router.back()}>
            Volver Menu Principal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
