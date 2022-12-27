#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["TournamentPlanner.Backend.Api/TournamentPlanner.Backend.Api.csproj", "TournamentPlanner.Backend.Api/"]
RUN dotnet restore "TournamentPlanner.Backend.Api/TournamentPlanner.Backend.Api.csproj"
COPY . .
WORKDIR "/src/TournamentPlanner.Backend.Api"
RUN dotnet build "TournamentPlanner.Backend.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TournamentPlanner.Backend.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TournamentPlanner.Backend.Api.dll"]