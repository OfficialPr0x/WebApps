import { HttpError } from 'wasp/server'

export const createProject = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }
  return context.entities.Project.create({
    data: {
      title: args.title,
      description: args.description,
      user: { connect: { id: context.user.id } }
    }
  });
}

export const createSkill = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }
  return context.entities.Skill.create({
    data: {
      name: args.name,
      userId: context.user.id
    }
  });
}

export const createAttribute = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401);
  }
  return context.entities.Attribute.create({
    data: { name: args.name, userId: context.user.id }
  });
}