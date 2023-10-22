import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const stuentId = req.query.id;

  try {
    const result = await prisma.student.update({
      where: { id: stuentId },
      data: {...req.body},
    });
  
    res.json(result);
  } catch (error) {
    res.status(500).json({error})
  }
}