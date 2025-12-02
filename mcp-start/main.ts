import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

// 1. Create new server instance
// this is the interface with MCP protocol. Managed communication with clients and servers
const server = new McpServer({
    name: "Demo",
    version: "1.0.0",
});