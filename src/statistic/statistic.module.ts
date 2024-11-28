import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { StatisticsController } from './statistic.controller'
import { StatisticsService } from './statistic.service'

@Module({
	controllers: [StatisticsController],
	providers: [StatisticsService, PrismaService]
})
export class StatisticsModule {}
