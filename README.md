# 🌤️ Weather MCP Server

<div align="center">

![MCP](https://img.shields.io/badge/MCP-Server-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-green?style=for-the-badge)

A **Model Context Protocol (MCP)** server that provides real-time weather information using the Open-Meteo API.

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api) • [Development](#-development)

</div>

---

## 📋 Features

✨ **Real-time Weather Data** - Fetch current weather conditions for any city worldwide  
🌍 **Geocoding Support** - Automatic city name to coordinates conversion  
🔧 **MCP Protocol** - Built on the Model Context Protocol for seamless AI integration  
⚡ **Fast & Lightweight** - Minimal dependencies, maximum performance  
🛠️ **TypeScript** - Fully typed for better developer experience  

---

## 🚀 Installation

### Prerequisites

- **Node.js** v18 or higher
- **pnpm** v10.24.0 (or npm/yarn)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mcp-project.git
   cd mcp-project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

---

## 💻 Usage

### Running the Server

```bash
npx tsx main.ts
```

### Using with MCP Inspector

For debugging and testing, use the MCP Inspector:

```bash
npx @modelcontextprotocol/inspector npx tsx main.ts
```

This will:
- Start the MCP server
- Launch the inspector UI in your browser
- Allow you to test tools interactively

---

## 🔌 API

### Available Tools

#### `fetch-weather`

Fetches current weather information for a specified city.

**Parameters:**
- `city` (string, required) - Name of the city to fetch weather for

**Example Request:**
```json
{
  "city": "London"
}
```

**Example Response:**
```json
{
  "content": [
    {
      "type": "text",
      "text": "{
        \"latitude\": 51.5074,
        \"longitude\": -0.1278,
        \"current\": {
          \"temperature_2m\": 15.2,
          \"precipitation\": 0,
          \"rain\": 0,
          \"is_day\": 1
        },
        \"hourly\": {
          \"temperature_2m\": [...]
        }
      }"
    }
  ]
}
```

---

## 🛠️ Development

### Project Structure

```
mcp-project/
├── main.ts              # Main server implementation
├── package.json         # Project dependencies
├── README.md           # This file
└── LICENSE             # License information
```

### Key Dependencies

- **@modelcontextprotocol/sdk** - MCP protocol implementation
- **zod** - Schema validation for parameters
- **tsx** - TypeScript execution

### How It Works

1. **Server Initialization**: Creates an MCP server instance with name and version
2. **Tool Registration**: Registers the `fetch-weather` tool with Zod schema validation
3. **Geocoding**: Converts city names to coordinates using Open-Meteo Geocoding API
4. **Weather Fetching**: Retrieves current weather data using coordinates
5. **Transport**: Uses STDIO transport for communication with MCP clients

---

## 🌐 APIs Used

- **[Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)** - City name to coordinates conversion
- **[Open-Meteo Weather API](https://open-meteo.com/en/docs)** - Weather forecast data

---

## 📝 Configuration

The server uses ES modules (`"type": "module"` in `package.json`) to support top-level await and modern JavaScript features.

### Server Configuration

```typescript
const server = new McpServer({
    name: "Demo",
    version: "1.0.0",
});
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [MCP SDK on npm](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
- [Open-Meteo API Documentation](https://open-meteo.com/en/docs)

---

<div align="center">

**Made with ❤️ using the Model Context Protocol**

</div>