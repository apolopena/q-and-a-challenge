#!/bin/bash

# Log to the console and a file
log () {
  if [ -z "$2" ]; then
    bash bash/utils.sh log "$1" /var/log/workspace-init.log
  else
    bash bash/utils.sh log "$1" /var/log/workspace-init.log -e
  fi
}

# Log only to a file
log_silent () {
  if [ -z "$2" ]; then
    bash bash/utils.sh log_silent "$1" /var/log/workspace-init.log
  else
    bash bash/utils.sh log_silent "$1" /var/log/workspace-init.log -e
  fi
}

# Load spinner
. bash/third-party/spinner.sh

__migrate_msg="Migrating database"
log_silent "$__migrate_msg" && start_spinner "$__migrate_msg"
php artisan migrate
err_code=$?
if [ $err_code != 0 ]; then
  stop_spinner $err_code
  log "ERROR: Failed to migrate database" -e
else
  stop_spinner $err_code
  log "SUCCESS: migrated database"
fi

__seed_msg="Seeding database"
log_silent "$__seed_msg" && start_spinner "$__seed_msg"
php artisan db:seed --class=QnASeeder
err_code=$?
if [ $err_code != 0 ]; then
  stop_spinner $err_code
  log "ERROR: Failed to seed database" -e
else
  stop_spinner $err_code
  log "SUCCESS: seeded database"
fi

