export interface userLoginReq {
    email: string,
    password: string
}
export interface UserLoginRes {
    data:{
		user:{
			id:string,
			email:string,
			firstName:string,
			lastName:string,
		},
		code:number,
		message:string
	}
}
