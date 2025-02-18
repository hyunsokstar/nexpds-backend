// import { Test, TestingModule } from '@nestjs/testing';
// import { GroupService } from './group.service';

// describe('GroupService', () => {
//   let service: GroupService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [GroupService],
//     }).compile();

//     service = module.get<GroupService>(GroupService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });

// src\group\group.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from './group.service';
import { PrismaService } from 'prisma/prisma.service';

describe('GroupService', () => {
  let service: GroupService;
  let prisma: PrismaService;
  const tenantId = 'b1750685-3c0f-4a6a-8b46-7f3408f30c06'; // ✅ 고정된 Tenant ID

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupService, PrismaService],
    }).compile();

    service = module.get<GroupService>(GroupService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    await prisma.group.deleteMany({ where: { tenantId } }); // ✅ 테스트 후 초기화
  });

  it('✅ 서비스가 정의되어 있어야 함', () => {
    expect(service).toBeDefined();
  });

  it('✅ 그룹 2개 생성 후, 2개인지 확인', async () => {
    // 🔹 그룹 2개 생성
    await service.createGroup({ name: 'Group A', tenantId });
    await service.createGroup({ name: 'Group B', tenantId });

    // 🔹 그룹 조회
    const groups = await service.getAllGroups();

    // 🔹 검증
    expect(groups).toHaveLength(2);
    expect(groups[0].name).toBe('Group A');
    expect(groups[1].name).toBe('Group B');
  });
});
