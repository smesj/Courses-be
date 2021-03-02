import { Router } from 'express';
import { CourseService } from '../services/course.service';
import { UserService } from '../services/user.service';

export const UserRoutes = () => {
	const router = Router();
	const userService = new UserService();

	router.post('/login', async (req, res, next) => {
		try {
			const user = await userService.findOrCreate(req.body);
			res.status(200).json({
				user,
			});
			next();
		} catch (err) {
			res.status(400).json({ message: 'BAD_REQUEST' });
			next();
		}
	});

	return router;
};
// need course routes file
export const CourseRoutes = () => {
	const router = Router();
	const courseService = new CourseService();
	router.post('/list', async (req, res, next) => {
		try {
			const courses = await courseService.all();
			res.status(200).json({
				courses,
			});
			next()
		} catch (err) {
			res.status(400).json({ message: 'BAD_REQUEST' });
			next();
		}
	})
	router.post('/registerUserForSection', async (req, res, next) => {
		try {
			const register = await courseService.registerUserForSection(req.body.userId, req.body.courseId);
			res.status(200).json({
				register,
			});
			next()
		} catch (err) {
			res.status(400).json({ message: 'BAD_REQUEST' });
			next();
		}
	})
	return router
}
