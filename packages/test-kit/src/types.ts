import { IFeatureTarget } from '@wixc3/engine-scripts';

export interface IExecutableApplication {
    startServer(): Promise<number>;
    runFeature(featureTarget: IFeatureTarget): Promise<void>;
    closeFeature(): Promise<void>;
    closeServer(): Promise<void>;
}