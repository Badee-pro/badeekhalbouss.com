const EventsSection = () => {
  const events = [
    {
      name: "VivaTech 2025",
      location: "Paris, France",
      year: "2025",
    },
  ];

  return (
    <section id="events" className="py-24 border-t border-dashed border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Attending</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-12 uppercase tracking-wide">Events</h2>

        <div className="space-y-0">
          {events.map((event, i) => (
            <div key={i} className="border-b border-dashed border-border py-6">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide">{event.name}</h3>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
                <p className="text-xs tracking-widest uppercase text-primary shrink-0">{event.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
