export declare class Contract {
  address: string
  abi: any[]

  constructor(address: string, abi: any[])

  [CALL_FUNC_NAME: string]: (...args: any[]) => any
}

export declare class Provider {
  chainId: number
  provider: any
  config?: any

  constructor(chainId: number, provider: any, config?: any)

  all(calls: any[]): Promise<any[]>
  tryAll(calls: any[]): Promise<(any | null)[]>
  tryEach(calls: any[], canFail: boolean[]): Promise<(any | null)[]>
  getEthBalance(address: string): Promise<string>
}
