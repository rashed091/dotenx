import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

export enum InternalQueryKey {
	GetTaskBuilderFunctions = 'get-task-builder-functions',
	GetAccessToken = 'get-access-token',
}

export function getTaskBuilderFunctions() {
	return api.get<TaskBuilderFunctionsResponse>('/mini/task')
}

export function getDomains(projectTag: string) {
	return api.get<GetDomainResponse>(`/project/tag/${projectTag}/domain`)
}

export function addDomain({ projectTag, domainName }: { projectTag: string; domainName: any }) {
	return api.post<void>(`/project/${projectTag}/domain`, domainName)
}
export function verifyDomain({ projectTag }: { projectTag: string }) {
	return api.post(`/project/${projectTag}/domain/verify`)
}

export interface TaskBuilderFunctionsResponse {
	mini_tasks: MiniTask[]
}
export interface GetDomainResponse {
	external_domain: string
	hosted_zone_id: string
	internal_domain: string
	ns_records: string[]
	tls_arn: string
}

export interface MiniTask {
	type: string
	description: string
	display_name: string
	number_of_params: number
	inputs: InOutPut[] | null
	outputs: InOutPut[]
}

export interface InOutPut {
	name: string
	type: Type
	description: string
}

export enum Type {
	Array = 'array',
	Boolean = 'boolean',
	Float = 'float',
	Integer = 'integer',
	Object = 'object',
	String = 'string',
}