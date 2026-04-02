import { ContributionProcedure } from './';
import { LiquidationContribution } from './';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ schema: 'public', name: 'liquidations', synchronize: false })
export class Liquidation {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'contribution_procedure_id', type: 'bigint' })
  contributionProcedureId: number;

  @Column({ type: 'bigint' })
  number: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  total: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => ContributionProcedure, (procedure) => procedure.id)
  contributionProcedure: ContributionProcedure;

  @OneToMany(() => LiquidationContribution, (liquidationcontribution) => liquidationcontribution.liquidation)
  liquidationContributions: LiquidationContribution[];
}
