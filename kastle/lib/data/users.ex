defmodule Data.Users do

    # Access Functions

    # Mutation Functions
    defdelegate t, to: Data.Mutations.Users
end