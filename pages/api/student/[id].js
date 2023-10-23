import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const stuentId = req.query.id;

  if (req.method === 'GET') {
    await handleGET(stuentId, req, res);
  } else if (req.method === 'PUT') {
    await handlePUT(stuentId, req, res);
  }
}

const handleGET = async (stuentId, req, res) => {
  try {
    const result = await prisma.student.findUnique({
      where: { id: stuentId },
    });
  
    res.json(result);
  } catch (error) {
    res.status(500).json({error})
  }
}

const handlePUT = async (stuentId, req, res) => {
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