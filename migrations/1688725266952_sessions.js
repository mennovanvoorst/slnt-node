exports.up = (pgm) => {
  pgm.dropTable("sessions", { ifExists: true, cascade: true });

  pgm.createTable("sessions", {
    sid: { type: "varchar", notNull: true },
    sess: { type: "json", notNull: true },
    expire: { type: "timestamp(6)", notNull: true },
  });

  pgm.addConstraint("sessions", "session_pkey", {
    primaryKey: "sid",
    deferrable: false,
    deferred: true,
  });

  pgm.createIndex("sessions", "expire", { name: "IDX_session_expire" });
};

exports.down = (pgm) => {
  pgm.dropTable("sessions", { ifExists: true, cascade: true });
};
