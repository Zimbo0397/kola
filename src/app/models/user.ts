export interface userLoginReq {
    email: string,
    password: string
}
export interface UserLoginRes {
    data:{
		user:{
			id:string,
			email:string,
			display_name:string,
			first_name:string,
			last_name:string,
			avatar:string,
			role:string,
			authorization_token:string
		},
		code:number,
		message:string
	}
}

export interface loginObj {
	usermail: string,
	userpass: string
}