import prisma from '../../../lib/prisma';

export default async function handle(req, res) {

  try {
    const result = await prisma.student.create({
      data: {...req.body},
    });
  
    res.json(result);
  } catch (error) {
    res.status(500).json({error})
  }
}