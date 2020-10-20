export class Job{
    constructor(
        public jobId?:string,
        public jobTitle?:string,
        public jobType?:string,
		public salary?:string,
        public location?:string,
        public company?:string,
        public skills?:string[],
        public jobDescription?:string,
        public status?:string
    ){

    }
}