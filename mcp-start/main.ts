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
        return {
            content: [
                {
                    type: 'text',
                    text: `The weather of ${city} is sunny`,
                },
            ],
        }
    }
)


// listen to the client connections
const transport = new StdioServerTransport();
await server.connect(transport);