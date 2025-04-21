
import * as React from "react"

import { cn } from "@/lib/utils"

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  numColumns: number
  gap?: number
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, numColumns, gap = 4, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid", className)}
        style={{
          gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
          gap: `${gap}px`,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Grid.displayName = "Grid"

export { Grid }
