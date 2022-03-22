import React from "react"
import { compareProps } from "../core/compareProps"

type TitleProps = {
  name: string
}
export const Title: React.FunctionComponent<TitleProps> = React.memo(
  ({ name }: TitleProps) => {
    return <div>Title: {name}</div>
  },
  compareProps
)

Title.displayName = "Title"
