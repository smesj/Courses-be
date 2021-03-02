import { Router } from 'express';
import { CourseService } from '../services/course.service';

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
	router.post('/enrollUserForSection', async (req, res, next) => {
		try {
			const user = await courseService.enrollUserForSection(req.body.userId, req.body.sectionId);
			res.status(200).json({
				user,
			});
			next()
		} catch (err) {
			res.status(400).json({ message: 'BAD_REQUEST' });
			next();
		}
	})
	router.post('/unenrollUserForSection', async (req, res, next) => {
		try {
			const user = await courseService.unenrollUserForSection(req.body.userId, req.body.sectionId);
			res.status(200).json({
				user,
			});
			next()
		} catch (err) {
			res.status(400).json({ message: 'BAD_REQUEST' });
			next();
		}
	})
	return router
}