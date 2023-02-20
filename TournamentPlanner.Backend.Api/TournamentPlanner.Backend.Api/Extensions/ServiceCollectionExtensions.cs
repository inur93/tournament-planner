using TournamentPlanner.Backend.Api.Configurations;

namespace TournamentPlanner.Backend.Api.Extensions;

public static class ServiceCollectionExtensions
{
    public static void AddExceptionMappingOptions(this IServiceCollection services, Action<ExceptionMapperOptions> configure)
    {
        var options = new ExceptionMapperOptions();
        configure(options);
        services.AddSingleton(options);
    }
}
