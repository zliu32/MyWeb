export interface userInfo{
    username: string,
    password: string
}

export interface ruleInfo {
    ruleId: number,
    username: String,
    score: number,
}

export interface requestInfo{
    ruleId: number,
    username: string,
    dateOffset: number,
    index: number
}