import { buildTarget } from './enviroment'


export const enviroment = {
  protocol: buildTarget.dev ? 'http' : 'https',
  host: buildTarget.dev ? 'localhost' : '10.221.11.5',
  port: buildTarget.dev ? '3000' : '4000',
}
