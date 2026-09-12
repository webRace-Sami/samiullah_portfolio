import { PrismaClient } from '@prisma/client';
import { portfolioData } from '../server/data/portfolioData.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Prisma Database Seed for Sami Ullah Portfolio...');

  // 1. Seed Profile
  const profile = portfolioData.profile;
  await prisma.profile.deleteMany({});
  await prisma.profile.create({
    data: {
      name: profile.name,
      title: profile.title,
      subtitle: profile.tagline,
      bio: profile.bio,
      phone: profile.phone,
      email: profile.email,
      address: profile.address,
      portfolioUrl: profile.portfolioUrl,
      githubUrl: profile.githubUrl,
      linkedinUrl: profile.linkedinUrl,
      whatsappUrl: profile.whatsappUrl,
    }
  });
  console.log('✅ Seeded Profile');

  // 2. Seed Projects
  await prisma.project.deleteMany({});
  for (const p of portfolioData.projects) {
    await prisma.project.create({
      data: {
        id: p.id,
        title: p.title,
        tagline: p.subtitle,
        description: p.description,
        category: p.category,
        liveUrl: p.liveUrl,
        githubUrl: p.githubUrl,
        technologies: JSON.stringify(p.technologies),
        highlights: p.highlights,
        featured: true,
      }
    });
  }
  console.log(`✅ Seeded ${portfolioData.projects.length} Projects`);

  // 3. Seed Experience
  await prisma.experience.deleteMany({});
  let order = 0;
  for (const exp of portfolioData.experiences) {
    await prisma.experience.create({
      data: {
        id: exp.id,
        company: exp.company,
        location: exp.location,
        position: exp.role,
        tenure: exp.tenure,
        summary: exp.companyOverview,
        responsibilities: JSON.stringify(exp.duties),
        skillsUsed: JSON.stringify(exp.technologies),
        order: order++
      }
    });
  }
  console.log(`✅ Seeded ${portfolioData.experiences.length} Experiences`);

  // 4. Seed Education
  await prisma.education.deleteMany({});
  order = 0;
  for (const edu of portfolioData.education) {
    await prisma.education.create({
      data: {
        degree: edu.degree,
        institution: edu.institution,
        year: edu.year,
        details: edu.description,
        order: order++
      }
    });
  }
  console.log(`✅ Seeded ${portfolioData.education.length} Education items`);

  // 5. Seed Certifications
  await prisma.certification.deleteMany({});
  for (const cert of portfolioData.certificationsAndStandards) {
    await prisma.certification.create({
      data: {
        code: cert.code,
        title: cert.title,
        description: cert.description,
        issuer: cert.scope
      }
    });
  }
  console.log(`✅ Seeded ${portfolioData.certificationsAndStandards.length} Standards & Certifications`);

  console.log('✨ Prisma database successfully seeded!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
