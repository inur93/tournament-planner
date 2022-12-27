using System.Security.Claims;

namespace TournamentPlanner.Backend.Api.Extensions;

public static class CustomClaims
{
    public static string Id = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
    public static string GivenName = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname";
    public static string Surname = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname";
}
public static class ClaimsPrincipalExtensions
{
    public static string GetId(this ClaimsPrincipal user)
    {
        return user?.Claims.FirstOrDefault(x => x.Type == CustomClaims.Id)?.Value ?? string.Empty;
    }

    public static string GetName(this ClaimsPrincipal user)
    {
        var firstName = user?.Claims.FirstOrDefault(x => x.Type == CustomClaims.GivenName)?.Value ?? string.Empty;
        var lastName = user?.Claims.FirstOrDefault(x => x.Type == CustomClaims.Surname)?.Value ?? string.Empty;

        return string.Join(" ", firstName, lastName);
    }
}
