// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

// export const databaseConfig: TypeOrmModuleOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: '1234',
//   database: 'slack_rdb_local',
//   autoLoadEntities: true,
//   synchronize: false,
//   retryAttempts: 1,
//   namingStrategy: new SnakeNamingStrategy(),
//   migrations: ['dist/migrations/*.js'],
//   cli: {
//     migrationsDir: 'src/migrations',
//   },
// };

// // export const databaseConfig: TypeOrmModuleOptions = {
// //   type: 'mysql',
// //   host: process.env.DATABASE_HOST,
// //   port: parseInt(process.env.DATABASE_PORT),
// //   username: process.env.DATABASE_USERNAME,
// //   password: process.env.DATABASE_PASSWORD,
// //   database: process.env.DATABASE_NAME,
// //   autoLoadEntities: true,
// //   synchronize: false,
// //   retryAttempts: 1,
// //   namingStrategy: new SnakeNamingStrategy(),
// //   migrations: ['dist/migrations/*.js'],
// //   cli: {
// //     migrationsDir: 'src/migrations',
// //   },
// // };
