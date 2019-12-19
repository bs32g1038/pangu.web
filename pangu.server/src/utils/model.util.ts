import { Model } from 'sequelize-typescript';
import { Inject } from '@nestjs/common';

const DB_MODEL_TOKEN_SUFFIX = 'db_model_token';

export function getModelToken(modelName: string): string {
    return modelName + DB_MODEL_TOKEN_SUFFIX;
}

export declare type ModelType = typeof Model;
export declare type ModelCtor<M extends Model = Model> = (new () => M) & ModelType;

// 根据 Model 获取 Provider
export const getProviderByModel = (model: ModelCtor) => {
    return {
        provide: model.name + DB_MODEL_TOKEN_SUFFIX,
        useValue: model,
    };
};

// 注入器
export const InjectModel = (model: ModelCtor) => {
    return Inject(getModelToken(model.name));
};

// 注入器
export const InjectRepository = () => {
    return Inject('SEQUELIZE');
};
