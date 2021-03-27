defmodule Data.Users do

    # Access Functions
    defdelegate find_by_uid(id) to: Data.Access.Users

    # Mutation Functions
    defdelegate t, to: Data.Mutations.Users

    # Query Functions
end