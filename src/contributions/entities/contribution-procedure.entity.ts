import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Liquidation } from './';

@Entity({ schema: 'public', name: 'contribution_procedures', synchronize: false })
export class ContributionProcedure {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'affiliate_id', type: 'bigint' })
  affiliateId: number;

  @Column({ name: 'modality_id', type: 'bigint' })
  modalityId: number;

  @Column({ type: 'varchar', length: 255 })
  code: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date;

  @OneToMany(() => Liquidation, (liquidation) => liquidation.contributionProcedure)
  liquidations: Liquidation[];
}
