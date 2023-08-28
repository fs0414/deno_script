const func = (n: number) => {
  if (n <= 1){
    return
  } else {
    console.log(n)
    func(n/2)
  }
}

func(10)