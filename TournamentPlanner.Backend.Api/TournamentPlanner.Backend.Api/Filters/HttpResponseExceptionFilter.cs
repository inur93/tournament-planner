using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using TournamentPlanner.Backend.Api.Configurations;

namespace TournamentPlanner.Backend.Api.Filters;

public class HttpResponseExceptionFilter : IActionFilter, IOrderedFilter
{
    private readonly ExceptionMapperOptions _options;

    public int Order => int.MaxValue - 10;

    public HttpResponseExceptionFilter(ExceptionMapperOptions options)
    {
        _options = options;
    }
    public void OnActionExecuting(ActionExecutingContext context) { }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        if (context.Exception is Exception)
        {
            var problemDetails =  _options.ToProblemDetails(context.Exception);
            context.Result = new JsonResult(problemDetails)
            {
                StatusCode = problemDetails.Status,
                ContentType = "application/json"
            };

            context.ExceptionHandled = true;
        }
    }
}
