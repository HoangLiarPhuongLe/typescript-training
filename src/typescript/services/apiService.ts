class ApiService<T> {
    private baseUrl: string;
    private path: string;

    constructor(baseUrl: string, path: string) {
        this.baseUrl = baseUrl;
        this.path = path;
    }

    async get(relationship: string): Promise<T> {
        try {
            const response = await fetch(`${this.baseUrl}${this.path}${relationship}`);
            if (!response.ok) {
                throw new Error('Failed');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default ApiService;
