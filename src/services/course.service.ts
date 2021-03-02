import { User } from '../entity/user';
import { getRepository } from 'typeorm';
import { Course } from '../entity/course'
import { CourseSection } from '../entity/course-section'

export class CourseService {
	private courseRepo = getRepository(Course);
    private sectionRepo = getRepository(CourseSection);
    private userRepo = getRepository(User);

	async all() {
		return this.courseRepo.find({relations:['courseSections', 'courseSections.users']});
	}

    // move to section service?
    
    async registerUserForSection(userId: string, courseSectionId: string) {
        const section = await this.sectionRepo.findOne(courseSectionId)
        const user = await this.userRepo.findOne(userId, {relations:["courseSections"]});
        user.courseSections = [...user.courseSections, section]
        return this.userRepo.save(user)
    }
}