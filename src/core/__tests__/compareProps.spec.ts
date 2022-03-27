import { compareProps } from "../compareProps"

describe("compareObject spec", () => {
  const obj1 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry"],
    valid: false,
  }

  const copyObj1 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry"],
    valid: false,
  }

  const obj2 = {
    name: "foo2",
    age: 18,
    users: ["William", "Jerry"],
    valid: false,
  }

  const obj3 = {
    name: "foo",
    age: 19,
    users: ["William", "Jerry"],
    valid: false,
  }

  const obj4 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry", "Amber"],
    valid: false,
  }

  const obj5 = {
    name: "foo",
    age: 18,
    users: [],
    valid: false,
  }

  const obj6 = {
    name: "foo",
    age: 18,
    users: ["Jerry"],
    valid: false,
  }

  const obj7 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry"],
    valid: true,
  }

  type TestType = {
    data: {
      key: string
      value: number
    }
  }

  const obj8: TestType = {
    data: {
      key: "1",
      value: 3,
    },
  }

  const obj9: TestType = {
    data: {
      key: "1",
      value: 4,
    },
  }

  const obj10: TestType = {
    data: {
      key: "1",
      value: 3,
    },
  }

  const obj11 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry", "Cindy"],
    valid: false,
  }

  const obj12 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry", "Cindy"],
    valid: false,
    user: {
      id: 1,
      name: "user1"
    }
  }

  const obj13 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry", "Cindy"],
    valid: false,
    user: {
      id: 2,
      name: "user2"
    }
  }

  const obj14 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry", "Cindy"],
    valid: false,
    list: [{
      id: 2,
      name: "user2"
    },{
      id: 1,
      name: "user3"
    }]
  }

  const obj15 = {
    name: "foo",
    age: 18,
    users: ["William", "Jerry", "Cindy"],
    valid: false,
    list: [{
      id: 2,
      name: "user2"
    },{
      id: 3,
      name: "user3"
    }]
  }

  const obj16 = {
    list: [{
      id: 2,
      name: "user2"
    },{
      id: 3,
      name: "user3"
    }]
  }

  const obj17 = {
    list: [{
      id: 2,
      name: "user2"
    },{
      id: 3,
      name: "user3"
    }]
  }

  it("compareObject shows", () => {
    expect(compareProps(obj1, copyObj1)).toBe(true)
    expect(compareProps(obj1, obj2)).toBe(false)
    expect(compareProps(obj1, obj3)).toBe(false)
    expect(compareProps(obj1, obj4)).toBe(false)
    expect(compareProps(obj1, obj5)).toBe(false)
    expect(compareProps(obj5, obj6)).toBe(false)
    expect(compareProps(obj1, obj7)).toBe(false)
    expect(
      Object.keys(obj8).every(key => {
        return compareProps(
          obj8[key as keyof TestType],
          obj9[key as keyof TestType]
        )
      })
    ).toBe(false)
    expect(
      Object.keys(obj8).every(key => {
        return compareProps(
          obj8[key as keyof TestType],
          obj10[key as keyof TestType]
        )
      })
    ).toBe(true)
    expect(compareProps(obj4, obj11)).toBe(false)
    expect(compareProps(obj12, obj13)).toBe(false)
    expect(compareProps(obj14, obj15)).toBe(false)
    expect(compareProps(obj16, obj17)).toBe(true)
  })
})