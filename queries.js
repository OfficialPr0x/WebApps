import { HttpError } from 'wasp/server';

export const getUserData = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  const userData = await context.entities.User.findUnique({
    where: { id: context.user.id },
    include: {
      projects: true,
      skills: true,
      attributes: true
    }
  });

  if (!userData) {
    throw new HttpError(400, 'User data not found');
  }

  return userData;
}