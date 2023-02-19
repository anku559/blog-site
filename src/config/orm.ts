import TagEntity from '@app/tag/tag.entity';
import { DataSourceOptions } from 'typeorm';

const ORM_CONFIG: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'ankit',
  database: 'blog_site',
  entities: [TagEntity],
  synchronize: true,
  // migrations: [__dirname + '/migrations/**/*.{.ts,.js}'],
};

export default ORM_CONFIG;
