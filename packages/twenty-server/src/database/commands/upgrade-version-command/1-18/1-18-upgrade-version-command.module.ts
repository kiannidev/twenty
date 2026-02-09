import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MigrateActivityRichTextAttachmentFileIdsCommand } from 'src/database/commands/upgrade-version-command/1-18/1-18-migrate-activity-rich-text-attachment-file-ids.command';
import { FeatureFlagEntity } from 'src/engine/core-modules/feature-flag/feature-flag.entity';
import { FeatureFlagModule } from 'src/engine/core-modules/feature-flag/feature-flag.module';
import { FileStorageModule } from 'src/engine/core-modules/file-storage/file-storage.module';
import { FileEntity } from 'src/engine/core-modules/file/entities/file.entity';
import { WorkspaceEntity } from 'src/engine/core-modules/workspace/workspace.entity';
import { DataSourceModule } from 'src/engine/metadata-modules/data-source/data-source.module';
import { FieldMetadataModule } from 'src/engine/metadata-modules/field-metadata/field-metadata.module';
import { GlobalWorkspaceDataSourceModule } from 'src/engine/twenty-orm/global-workspace-datasource/global-workspace-datasource.module';
import { WorkspaceCacheModule } from 'src/engine/workspace-cache/workspace-cache.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkspaceEntity, FeatureFlagEntity, FileEntity]),
    DataSourceModule,
    FeatureFlagModule,
    FieldMetadataModule,
    FileStorageModule.forRoot(),
    WorkspaceCacheModule,
    GlobalWorkspaceDataSourceModule,
  ],
  providers: [MigrateActivityRichTextAttachmentFileIdsCommand],
  exports: [MigrateActivityRichTextAttachmentFileIdsCommand],
})
export class V1_18_UpgradeVersionCommandModule {}
