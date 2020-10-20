import { Education } from './education.model';
import { WorkExperience } from './WorkExperience.model';

export class Seeker{
    constructor(
        public seekerId?:string,
		public firstName?:string,
		public lastName?:string,
		public city?:string,
		public email?:string,
		public phoneNumber?:string,
		public skills?:string[],
		public educations?:Education[],
		public workExperiences?:WorkExperience[]
    ){

    }
}