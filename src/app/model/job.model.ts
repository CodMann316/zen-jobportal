export class job{
    constructor(

        public jobId?:string,
        public jobTitle?:string,
        public location?:string,
        public jobType?:string,
        public skills?:string[],
        public jobDescription?:string,
        public status?:string,
		public salary?:string
    ){

    }
}