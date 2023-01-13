import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { USUARIOS_MODEL_DEFINITION } from '../usuario/esquemas/usuario.esquema';
import { UsuariosController } from '../usuario/controllers/usuario.controller';
import { UsuarioService } from '../usuario/servicios/usuario.service';
import { UsuarioAplicacion } from '../usuario/aplicaciones/usuario.aplication';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: environment.contexto.MongoDB,
        dbName: 'Seminario',
      }),
    }),
    MongooseModule.forFeature([USUARIOS_MODEL_DEFINITION]),
  ],
  controllers: [AppController, UsuariosController],
  providers: [
    AppService, 
    UsuarioService,
    UsuarioAplicacion
  ],
})
export class AppModule {}
