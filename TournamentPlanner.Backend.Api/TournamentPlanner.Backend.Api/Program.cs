using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Text.Json.Serialization;
using TournamentPlanner.Backend.Api.Configurations;
using TournamentPlanner.Backend.Api.Extensions;
using TournamentPlanner.Backend.Api.Filters;
using TournamentPlanner.Backend.Domain;
using TournamentPlanner.Backend.Domain.Exceptions;
using TournamentPlanner.Backend.Domain.Repositories;
using TournamentPlanner.Backend.Persistence.Repositories;
using TournamentPlanner.Backend.Services;
using TournamentPlanner.Backend.Services.Abstractions;

var builder = WebApplication.CreateBuilder(args);

//using var scope = serviceProvider.CreateScope();
//await using var dbContext = scope.ServiceProvider.GetRequiredService<DatabaseContext>();

builder.Services.AddControllers(options =>
{
    options.Filters.Add<HttpResponseExceptionFilter>();
})
.AddJsonOptions(options =>
{
    options.JsonSerializerOptions.Converters.Add(new DateTimeConverter());
    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
})
.AddApplicationPart(typeof(TournamentPlanner.Backend.Presentation.AssemblyReference).Assembly);

builder.Services.AddExceptionMappingOptions(c =>
{
    c.Map<EntityNotFoundException>(System.Net.HttpStatusCode.NotFound, e => e.Message, e => e.Message);
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(config =>
{
    config.CustomOperationIds(e => e.ActionDescriptor.RouteValues["action"]);
    config.UseOneOfForPolymorphism();

    config.SelectDiscriminatorNameUsing(baseType => "TypeName");
    config.SelectDiscriminatorValueUsing(subType => subType.Name);

    var controllersXmlFilename = $"{typeof(TournamentPlanner.Backend.Presentation.AssemblyReference).Assembly.GetName().Name}.xml";
    var contractsXmlFilename = $"{typeof(TournamentPlanner.Backend.Contracts.AssemblyReference).Assembly.GetName().Name}.xml";

    config.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, controllersXmlFilename));
    config.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, contractsXmlFilename));
    config.SupportNonNullableReferenceTypes();
    //config.SelectDiscriminatorNameUsing((baseType) => base)
});

builder.Services.AddScoped<IServiceManager, ServiceManager>();
builder.Services.AddScoped<IRepositoryManager, RepositoryManager>();

builder.Services.AddDbContext<DatabaseContext>(config =>
{
    var connectionString = builder.Configuration.GetConnectionString("Database");
    config.UseNpgsql(connectionString);
});

//// Add services to the container.

//builder.Services.AddDefaultIdentity<ApplicationUser>()
//    .AddEntityFrameworkStores<ExecutersContext>();

//builder.Services.AddIdentityServer()
//    .AddApiAuthorization<ApplicationUser, ExecutersContext>();

//builder.Services
//    .AddAuthentication()
//    .AddCookie(options =>
//    {
//        options.Cookie.Domain = "localhost:3000";
//        options.Cookie.SameSite = SameSiteMode.None;
//    });

//builder.Services.ConfigureApplicationCookie(options =>
//{
//    options.LoginPath = "/auth/login";
//    options.LogoutPath = "/auth/logout";
//});

//builder.Services.AddDatabaseDeveloperPageExceptionFilter();

//builder.Services.AddAutoMapper(typeof(Program).Assembly);


var app = builder.Build();

//// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
    //app.UseMigrationsEndPoint();

    app.UseCors(c =>
    {
        //c.AllowAnyOrigin();
        c.WithOrigins(new string[] { "https://localhost:3000", "http://localhost:6006" });
        c.AllowAnyMethod();
        c.AllowAnyHeader();
    });
}

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    var context = services.GetRequiredService<DatabaseContext>();
    await context.Database.MigrateAsync();
}

//if (!app.Environment.IsDevelopment())
//{
//    // for development we need to allow http to be able to generate the client for the frontend.
//    app.UseHttpsRedirection();
//    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
//    app.UseHsts();
//}

//app.UseAuthentication();
//app.UseIdentityServer();
//app.UseAuthorization();

app.MapControllers();

await app.RunAsync();
