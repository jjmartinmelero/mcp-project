import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from 'zod'

// 1. Create new server instance
// this is the interface with MCP protocol. Managed communication with clients and servers
const server = new McpServer({
    name: "Demo",
    version: "1.0.0",
});

// define server tools 
server.tool(
    'fetch-weather', //title tool
    'Tool to fetch the weather of a city', //description tool
    {
        city: z.string().describe('City name'), //params tool
    },
    async ({ city }) => {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`);
        const data = await response.json();

        if (data.length === 0) {
            return {
                content: [
                    {
                        type: 'text',
                        text: `The weather of ${city} is sunny`,
                    },
                ],
            }
        }

        const { latitude, longitude } = data.results[0];

        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=precipitation,temperature_2m,is_day,rain&forecast_days=1`)
        const weatherData = await weatherResponse.json();

        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(weatherData, null, 2),
                },
            ],
        }
    }
)


// listen to the client connections
const transport = new StdioServerTransport();
await server.connect(transport);