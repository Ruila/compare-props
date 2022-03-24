import React from "react"
import { compareProps } from "compare-props"

type TitleProps = {
  name: string
}
export const Title: React.FunctionComponent<TitleProps> = React.memo(
  ({ name }: TitleProps) => {
    return <div>Title: {name}{console.info("aaaa")}</div>
  },
  compareProps
)

Title.displayName = "Title"
