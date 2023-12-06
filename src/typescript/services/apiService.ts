class ApiService {
    private baseUrl: string;
    private path: string;

    constructor(baseUrl: string, path: string) {
        this.baseUrl = baseUrl;
        this.path = path;
    }

    async get(): Promise<any> {
        try {
            const response = await fetch(`${this.baseUrl}${this.path}?_expand=category`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

export default ApiService;
