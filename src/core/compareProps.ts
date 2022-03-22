export function compareProps<T>(prevObj: T, nextObj: T): boolean {
  return Object.keys(prevObj).every(key => {
    if (
      Object.prototype.toString.call(prevObj[key as keyof typeof prevObj]) ===
        "[object String]" ||
      Object.prototype.toString.call(prevObj[key as keyof typeof prevObj]) ===
        "[object Boolean]" ||
      Object.prototype.toString.call(prevObj[key as keyof typeof prevObj]) ===
        "[object Number]"
    ) {
      return (
        prevObj[key as keyof typeof prevObj] ===
        nextObj[key as keyof typeof nextObj]
      )
    } else if (
      Object.prototype.toString.call(prevObj[key as keyof typeof prevObj]) ===
      "[object Array]"
    ) {
      if (
        (prevObj[key as keyof typeof prevObj] as unknown as Array<T>).length !==
        (nextObj[key as keyof typeof nextObj] as unknown as Array<T>).length
      ) {
        return false
      } else if (
        (prevObj[key as keyof typeof prevObj] as unknown as Array<T>).length >
          0 &&
        (nextObj[key as keyof typeof nextObj] as unknown as Array<T>).length >
          0 &&
        (prevObj[key as keyof typeof prevObj] as unknown as Array<T>).length ===
          (nextObj[key as keyof typeof nextObj] as unknown as Array<T>).length
      ) {
        for (
          let i = 0;
          i <
          (nextObj[key as keyof typeof nextObj] as unknown as Array<T>).length;
          i++
        ) {
          if (
            !compareProps(
              (prevObj[key as keyof typeof nextObj] as unknown as Array<T>)[i],
              (nextObj[key as keyof typeof nextObj] as unknown as Array<T>)[i]
            )
          ) {
            return false
          }
        }
      } else {
        return true
      }
    }
    return true
  })
}
