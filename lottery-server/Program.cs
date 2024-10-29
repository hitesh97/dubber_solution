var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowNextJsApp",
        policy => policy.WithOrigins("http://localhost:3000") // Update with Next.js URL if needed
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

// Use CORS policy
app.UseCors("AllowNextJsApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
