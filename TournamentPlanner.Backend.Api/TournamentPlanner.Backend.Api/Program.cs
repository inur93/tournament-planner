using TournamentPlanner.Backend.Api.Configurations;
using TournamentPlanner.Backend.Api.Filters;

var builder = WebApplication.CreateBuilder(args);

//// Add services to the container.

//builder.Services.AddControllers(options =>
//{
//    options.Filters.Add<HttpResponseExceptionFilter>();
//})
//    .AddJsonOptions(options =>
//    {
//        options.JsonSerializerOptions.Converters.Add(new DateTimeConverter());
//    });
//// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen(c =>
//{
//    c.CustomOperationIds(e => e.ActionDescriptor.RouteValues["action"]);
//});

//builder.Services.AddDbContext<ExecutersContext>(options =>
//  options.UseNpgsql(builder.Configuration.GetConnectionString("DbContext")));

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


//var app = builder.Build();

//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//    app.UseDeveloperExceptionPage();
//    app.UseMigrationsEndPoint();

//    app.UseCors(c =>
//    {
//        //c.AllowAnyOrigin();
//        c.WithOrigins(new string[] { "https://localhost:3000" });
//        c.AllowAnyMethod();
//        c.AllowAnyHeader();
//    });
//}

//using (var scope = app.Services.CreateScope())
//{
//    var services = scope.ServiceProvider;

//    var context = services.GetRequiredService<ExecutersContext>();
//    context.Database.EnsureCreated();
//    context.Database.Migrate();
//}

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

//app.MapControllers();

//app.Run();
