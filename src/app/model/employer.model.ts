import { Job } from './job.model';

export class Employer{
    constructor(
	    public firstName?:string,
	    public lastName?:string,
	    public companyName?:string,
	    public companyLocation?:string,
	    public email?:string,
	    public jobs?:Job,
    ){

    }
}